export default function locationParser(location: string) {
    let locationArray = location.split('/');
    const name = locationArray.pop();
    const path = locationArray.join('/');
    return { name, path };
}