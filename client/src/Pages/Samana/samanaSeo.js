import SamanaFavicon from '../../Assests/Samana/Samanafavicon.ico';

export function applySamanaSeo(title, description) {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute('content') || '';
    const createdDescriptionMeta = !descriptionMeta;
    const activeDescriptionMeta = descriptionMeta || document.createElement('meta');
    const previousIconLinks = Array.from(document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']")).map((link) =>
        link.cloneNode(true)
    );

    if (createdDescriptionMeta) {
        activeDescriptionMeta.setAttribute('name', 'description');
        document.head.appendChild(activeDescriptionMeta);
    }

    document.title = title;
    activeDescriptionMeta.setAttribute('content', description);

    document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']").forEach((link) => link.remove());

    ['icon', 'shortcut icon'].forEach((rel) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = SamanaFavicon;
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    });

    return () => {
        document.title = previousTitle;

        if (createdDescriptionMeta) {
            activeDescriptionMeta.remove();
        } else {
            activeDescriptionMeta.setAttribute('content', previousDescription);
        }

        document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']").forEach((link) => link.remove());
        previousIconLinks.forEach((link) => document.head.appendChild(link));
    };
}
