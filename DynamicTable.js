const employees = [{ id: 1, name: "Alice", lastname: "Johnson", role: "Software Engineer", salary: 85000 },
    { id: 2, name: "Bob", lastname: "Smith", role: "Project Manager", salary: 95000 },
    { id: 3, name: "Carol", lastname: "Davis", role: "UX Designer", salary: 78000 },
    { id: 4, name: "David", lastname: "Wilson", role: "Quality Analyst", salary: 72000 },
    { id: 5, name: "Eve", lastname: "Brown", role: "Software Engineer", salary: 87000 },
    { id: 6, name: "Frank", lastname: "White", role: "DevOps Engineer", salary: 89000 },
    { id: 7, name: "Grace", lastname: "Taylor", role: "Product Manager", salary: 98000 },
    { id: 8, name: "Hank", lastname: "Moore", role: "Data Scientist", salary: 102000 },
    { id: 9, name: "Ivy", lastname: "Clark", role: "HR Specialist", salary: 67000 },
    { id: 10, name: "Jack", lastname: "Lewis", role: "Marketing Analyst", salary: 71000 }
];

function handleClick() {
    const btn = document.getElementById("b1");
    const tb = document.getElementById("t1");

    btn.addEventListener("click", function () {

        const tr1 = document.createElement("tr");
        tb.appendChild(tr1);
        const a1 = [];
        for (let i = 1; i < 6; i++) {
            a1[i] = document.createElement('th');
            tr1.appendChild(a1[i]);
        };
        a1[1].textContent = 'ID';
        a1[2].textContent = 'NAME';
        a1[3].textContent = 'LASTNAME';
        a1[4].textContent = 'ROLE';
        a1[5].textContent = 'SALARY';

        for (const e of employees) {
            const tr = document.createElement('tr');
            tb.appendChild(tr);
            for (const key in e) { 
                const td = document.createElement('td');
                td.textContent = e[key]; 
                tr.appendChild(td);
            };
        };
    });
};

document.addEventListener("click", handleClick);


