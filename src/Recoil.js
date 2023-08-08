import { atom } from "recoil";

export const dataAtom = atom({
    key: 'data',
    default: [
        {
            txt: 'Personal Information',
            active: true,
            completed: false
        },
        {
            txt: 'Shipping Address',
            active: false,
            completed: false
        },
        {
            txt: 'Payment Details',
            active: false,
            completed: false
        },
        {
            txt: 'Order Summary',
            active: false,
            completed: false
        },
        {
            txt: 'Confirmation',
            active: false,
            completed: false
        }
    ]
});