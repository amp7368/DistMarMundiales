import i18next, { Resource } from 'i18next';
import translations from './localize.json';

function translate(obj: unknown, path: string): Resource {
    if (typeof obj !== 'object' || !obj) return {};
    let out: Resource = {};
    for (const [key, value] of Object.entries(obj)) {
        if (['en', 'es'].includes(key)) {
            if (!out[key]) out[key] = {};
            if (typeof value === 'string') out[key][path] = value;
        } else {
            const newPath = path ? `${path}.${key}` : key;
            out = merge(out, translate(value, newPath));
        }
    }
    return out;
}
function merge(a: Resource, b: Resource): Resource {
    const out: Resource = {};
    for (const language of [...Object.keys(a), ...Object.keys(b)]) {
        out[language] = { ...a[language], ...b[language] };
    }
    return out;
}
export async function localizeInit() {
    await i18next.init({
        lng: 'en',
        resources: translate(translations, ''),
    });
}
