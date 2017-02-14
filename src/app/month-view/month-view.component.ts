import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Month} from "./month-selector/month-selector.component";
declare var $: any;

let dataSource = ['Urlop', 'Święto', 'Konferencja',
    'Chorobowe'
];

@Component({
    selector: 'month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit,AfterViewInit {
    private days: Array<WorkingDay> = [];
    private program: string = 'NEXT VERTO';

    constructor() {
    }


    ngOnInit() {

    }

    public ngAfterViewInit(): void {
        let self = this;
        for (let day of this.days) {
            let lp = day.lp;

            $("#combo_" + lp).kendoComboBox({
                dataSource: dataSource,
                change: function (event) {
                    let value = this.value();
                    self.days[lp - 1].setNonWork(value);
                    console.log('event: ', event, value);

                }
            });
        }
    }

    showMonthDays(month: Month) {
        this.days = [];
        let date = month.date;
        let lastDay = date.endOf('month').date();
        for (let i = 1; i <= lastDay; i++) {
            let any = date.date(i);
            let workingDay = new WorkingDay(i, this.program, 8, 0);
            if (any.isoWeekday() == 6 || any.isoWeekday() == 7) {
                workingDay.workHours = 0;
                workingDay.weekend = true;
            }
            this.days.push(workingDay);


        }
        console.log('month: ', month,)
    }

}

class WorkingDay {
    constructor(public lp: number, public program: string, public workHours: number, public nonWorkHours: number) {

    }

    public nonWorkReason: string;
    public weekend: boolean;


    setNonWork(reason: string) {
        this.nonWorkReason = reason;
        this.nonWorkHours = 8;
    }

}
