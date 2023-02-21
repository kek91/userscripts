/**
 * Kvassh helper class for Torn userscripts
 */
export class Kvassh {

    private static prefix: string = 'kvassh';

    public static getPrefix() {
        return this.prefix;
    }

    public static setPrefix(data: string) {
        this.prefix = 'kvassh.' + data;
    }

    public static set(key: string, val: string) {
        localStorage.setItem(this.prefix + '.' + key, val);
    };

    public static get(key: string) {
        return localStorage.getItem(this.prefix + '.' + key);
    };

    public static clear() {
        const confirmation = confirm('Are you sure you wish to clear all data?');
        if (confirmation) {
            this.set(this.prefix + 'data', null);
        }
    };
}

export function log(lvl: string, msg: string) {
    switch (lvl) {
        case 'e':
            console.error('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
        case 'w':
            console.warn('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
        default:
            console.log('[' + Kvassh.getPrefix() + '] ' + msg);
            break;
    }
}
