import { Kvassh, log } from './kvassh'

const kvassh = Kvassh;
kvassh.setPrefix('lowlvl.attack.detector'); // cache data will be stored as kvassh.lowlvl.attack.detector.item1 etc in localStorage

if (kvassh.get('uid')) {
    log('i', 'Torn user ID: ' + kvassh.get('uid'));
}
else {
    log('e', 'Could not fetch Torn user ID!');
}


