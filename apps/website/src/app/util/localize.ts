import i18next from 'i18next';

export async function localizeInit() {
    await i18next.init({
        lng: 'en',
        resources: {
            en: {},
        },
    });
}
