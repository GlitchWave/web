const SEO_SERVICE = (routes) => {
    let seo_config = {};

    routes.forEach(route => {
        seo_config[route.name] = {
            description: route.description,
            keywords: route.keywords.join(', ')
        }
    });

    return seo_config;
}

export default SEO_SERVICE([{name: 'main', description: 'lel', keywords: ['Web', 'Good', 'Butterknife']},
                            {name: 'portfolio', description: 'some description', keywords: ['site', 'web', 'service', 'good']},
                            {name: 'aboutus', description: 'some default', keywords: ['site', 'web', 'new']},
                            {name: 'contacts', description: 'default desc', keywords: ['some', 'key', 'words']},
                            {name: 'start', description: 'some def', keywords: ['some', 'shit', 'you know']},
                            {name: 'startup', description: 'jkefjl lkfl', keywords: ['some', 'def', 'shit']}]);