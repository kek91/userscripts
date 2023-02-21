/**
 * Kvassh helper class for Torn userscripts
 */
export class Kvassh {

    private static prefix: string = 'kvassh.';

    public static getPrefix() {
        return this.prefix;
    }

    public static setPrefix(data: string) {
        this.prefix = 'kvassh.' + data + '.';
    }

    public static set(key: string, val: string) {
        localStorage.setItem(this.prefix + key, val);
    };

    public static get(key: string) {
        return localStorage.getItem(this.prefix + key);
    };

    public static clear() {
        const confirmation = confirm('Are you sure you wish to clear all data?');
        if (confirmation) {
            this.set(this.prefix + 'aaa', null);
            this.set(this.prefix + 'bbb', null);
            this.set(this.prefix + 'ccc', null);
            this.set(this.prefix + 'ddd', null);
        }
    };
}

export function log(lvl: string, msg: string) {
    switch (lvl) {
        case 'e':
            console.error(msg);
            break;
        case 'w':
            console.warn(msg);
            break;
        default:
            console.log(msg);
            break;
    }
}
