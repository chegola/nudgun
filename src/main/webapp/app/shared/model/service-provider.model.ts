export interface IServiceProvider {
    id?: number;
    name?: string;
    profile_pic?: string;
    services?: string;
    address?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    instragram?: string;
    acceptCreditCard?: boolean;
    parkingAvailable?: boolean;
    description?: string;
}

export class ServiceProvider implements IServiceProvider {
    constructor(
        public id?: number,
        public name?: string,
        public profile_pic?: string,
        public services?: string,
        public address?: string,
        public phone?: string,
        public email?: string,
        public facebook?: string,
        public instragram?: string,
        public acceptCreditCard?: boolean,
        public parkingAvailable?: boolean,
        public description?: string
    ) {
        this.acceptCreditCard = this.acceptCreditCard || false;
        this.parkingAvailable = this.parkingAvailable || false;
    }
}
