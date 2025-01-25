const days = [
    [
        ["12:00 PM", "11:00 AM", "12:00 PM"],
        ["12:00 PM", "11:30 AM", "12:00 PM"],
        ["12:00 PM", "12:00 PM", "12:00 PM"],
        ["12:30 PM", "01:00 PM", "12:00 PM"]
    ],
    [
        ["-", "10:00 AM", "-"],
        ["-", "10:30 AM", "-"],
        ["-", "11:00 AM", "-"],
        ["-", "11:30 AM", "-"]
    ],
    [
        ["-", "09:00 AM", "-"],
        ["-", "09:30 AM", "-"],
        ["-", "10:00 AM", "-"],
        ["-", "10:30 AM", "-"]
    ]
];

let currentDay = 0;

function showDay(index) {
    currentDay = index;
    updateTable();
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.day-btn')[index].classList.add('active');
}

function updateTable() {
    const tableBody = document.getElementById('timeSlots');
    tableBody.innerHTML = days[currentDay].map(row => `
        <tr>
            <td class="${row[0].includes('PM') ? 'unavailable' : ''}">${row[0]}</td>
            <td>${row[1]}</td>
            <td class="${row[2].includes('PM') ? 'unavailable' : ''}">${row[2]}</td>
        </tr>
    `).join('');
}

function prevDay() {
    if (currentDay > 0) {
        showDay(currentDay - 1);
    }
}

function nextDay() {
    if (currentDay < days.length - 1) {
        showDay(currentDay + 1);
    }
}

updateTable();
