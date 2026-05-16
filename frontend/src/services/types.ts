export interface User {
    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: 'USER' | 'COMPANY' | 'ADMIN';
    profileImage?: string;
    createdAt: Date,
    UpdatedAt: Date
}

export interface Barber {
    id: string;
    status: string;
    user: User;
    working_hours: number;
    experience_years: number;
}

export interface ServiceData{
    id: string,
    title: string,
    description: string,
    price: number,
    duration: number,
    base_url: string,
    isSelected: boolean
}
