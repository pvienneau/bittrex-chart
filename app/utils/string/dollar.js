export default function(str = '') {
    const segments = str.toString().split('.');

    segments[0] = segments[0] || 0;
    segments[1] = `${segments[1] || ''}00`.substr(0, 2);

    return segments.join('.');
}
