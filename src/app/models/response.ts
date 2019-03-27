export interface Response {
    errno: number;
    error: string;
    body: Response.JobDetail[];
}

export namespace Response {

    export interface Counter {
        messages_total: number;
        messages_unread: number;
    }

    export interface Category {
        id: string;
    }

    export interface JobDetail {
        id: string;
        title: string;
        zip_code: string;
        city: string;
        thumbnail: string;
        attachments: string[];
        counter: Counter;
        is_awarded: boolean;
        categories: Category[];
        state: string;
        description: string;
        end_date: Date;
        created_at: Date;
    }
}