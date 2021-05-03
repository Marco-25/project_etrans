import { FormEvent } from "react";

export function cep(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 9;
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    event.currentTarget.value = value;
    return event;
}

export function birthDate(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 10;
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");
    event.currentTarget.value = value;
    return event;
}

export function currency(event: FormEvent<HTMLInputElement>) {
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    event.currentTarget.value = value;
    return event;
}

export function cpf(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 14;
    let value = event.currentTarget.value;
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        event.currentTarget.value = value;
    }
    return event;
}

export function cnpj(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 18;
    let value = event.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
        event.currentTarget.value = value;
    }
    return event;
}

export function cell(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 17;
    let value = event.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{2}).(\d{1})(\d{4})-(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "+$1 $2");
        value = value.replace(/(\d{2})(\d)/, "$1 $2");
        value = value.replace(/(\d{4})(\d{4})$/, "$1-$2");
        event.currentTarget.value = value;
    }
    return event;
}

export function phone(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.maxLength = 16;
    let value = event.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{2}).(\d{4})-(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "+$1 $2");
        value = value.replace(/(\d{2})(\d)/, "$1 $2");
        value = value.replace(/(\d{4})(\d{4})$/, "$1-$2");
        event.currentTarget.value = value;
    }
    return event;
}
