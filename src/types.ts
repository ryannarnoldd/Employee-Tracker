export interface Employee {
    first_name: string;
    last_name: string;
    role: string;
    manager: string;
}

export interface Role {
    title: string;
    salary: number;
    department_id: number;
}

export interface Department {
    name: string;
}