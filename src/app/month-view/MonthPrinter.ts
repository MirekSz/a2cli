/**
 * Created by Mirek on 2017-02-23.
 */
declare var pdfMake: any;

export default function print(userData, month, days) {
    let dateFormat = month.date.format('YYYY MMMM');
    let body: any = [
        ['Dzień miesiąca', 'Czas pracy', 'Program', 'Czas nieobecności', 'Przyczyna nieobecności'],
    ];
    for (let day of days) {
        body.push([day.lp, day.workHours || '', day.holiday || day.weekend ? '' : (day.nonWorkHours == 8 ? '' : userData.program), day.holiday || day.weekend ? '' : day.nonWorkHours || '', day.holiday || day.weekend ? '' : day.nonWorkReason || '']);
    }
    let docDefinition = {
        content: [{
            text: 'Zestawienie czasu pracy pracownika za ' + dateFormat + " - " + userData.user,
            style: 'header'
        }, {
            layout: 'lightHorizontalLines',
            style: 'table',
            table: {
                headerRows: 1,
                widths: ['*', 'auto', 100, '*', '*'],

                body: body
            }
        }],
        styles: {
            header: {
                fontSize: 12,
                alignment: 'center',
                margin: [0, 0, 0, 20]
            },
            table: {
                alignment: 'center',
                fontSize: 8,
            }
        }
    };
    pdfMake.createPdf(docDefinition).open();
}
