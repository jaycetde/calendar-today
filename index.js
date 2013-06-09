var now = new Date();

function setToday(cal) {
    var today = cal.getElementByDate(now);
    if (today) {
        today.className += (today.className ? ' ' : '') + 'today';
    }
}

exports.plugin = function (cal) {
    cal.on('render', function (date) {
        if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()) {
            setToday(cal);
        }
    });
    setToday(cal);
};