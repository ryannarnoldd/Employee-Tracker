// Going to experiment not needing this.

export interface Employee {
    first_name: string;
    last_name: string;
    role_id: number;
    manager_id: number;
}

export interface Role {
    title: string;
    salary: number;
    department_id: number;
}

export interface Department {
    name: string;
}