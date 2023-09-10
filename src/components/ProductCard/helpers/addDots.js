export default function addDots(str){
    if (str.length > 67) {
        return str.slice(0, 67) + '...';
    }
    return str;
}
