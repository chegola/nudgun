export interface IServiceProvider {
    id?: number;
    name?: string;
    profile_pic?: string;
    services?: string;
    openHour?: string;
    address?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    instragram?: string;
    acceptCreditCard?: boolean;
    parkingAvailable?: boolean;
    description?: string;
    priceRange?: string;
}

export class ServiceProvider implements IServiceProvider {
    constructor(
        public id?: number,
        public name?: string,
        public profile_pic?: string,
        public services?: string,
        public openHour?: string,
        public address?: string,
        public phone?: string,
        public email?: string,
        public facebook?: string,
        public instragram?: string,
        public acceptCreditCard?: boolean,
        public parkingAvailable?: boolean,
        public description?: string,
        public priceRange?: string
    ) {
        this.acceptCreditCard = this.acceptCreditCard || false;
        this.parkingAvailable = this.parkingAvailable || false;
    }
}
