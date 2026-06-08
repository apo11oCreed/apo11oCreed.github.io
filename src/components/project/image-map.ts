// Import all project images with JSX optimization
import InteractiveAppVisualization1 from '~/media/interactive-app-visualization-2.png?jsx';
import InteractiveAppTool3 from '~/media/interactive-app-tool-3.png?jsx';
import InteractiveAppVisualization3 from '~/media/interactive-app-visualization-1.png?jsx';
import CampaignsNewsletter1 from '~/media/campaigns-newsletter-1.png?jsx';
import WordPressCustomMultisite from '~/media/wordpress-custom-multisite.png?jsx';
import WordPressCustom from '~/media/wordpress-custom.png?jsx';
import CampaignsMarketingEmail1 from '~/media/campaign-marketing-email-1.png?jsx';
import EnterpriseEcom1 from '~/media/enterprise-ecom-1.png?jsx';
import InteractiveAppTool4 from '~/media/interactive-app-tool-4.png?jsx';

// Import the same images as URLs for Schema.org contentUrl
import InteractiveAppVisualization1Url from '~/media/interactive-app-visualization-2.png';
import InteractiveAppTool3Url from '~/media/interactive-app-tool-3.png';
import InteractiveAppVisualization3Url from '~/media/interactive-app-visualization-1.png';
import CampaignsNewsletter1Url from '~/media/campaigns-newsletter-1.png';
import WordPressCustomMultisiteUrl from '~/media/wordpress-custom-multisite.png';
import WordPressCustomUrl from '~/media/wordpress-custom.png';
import CampaignsMarketingEmail1Url from '~/media/campaign-marketing-email-1.png';
import EnterpriseEcom1Url from '~/media/enterprise-ecom-1.png';
import InteractiveAppTool4Url from '~/media/interactive-app-tool-4.png';

export const imageMap: Record<string, any> = {
    'interactive-app-visualization-2.png': InteractiveAppVisualization1,
    'interactive-app-tool-3.png': InteractiveAppTool3,
    'interactive-app-visualization-1.png': InteractiveAppVisualization3,
    'campaigns-newsletter-1.png': CampaignsNewsletter1,
    'wordpress-custom-multisite.png': WordPressCustomMultisite,
    'wordpress-custom.png': WordPressCustom,
    'campaign-marketing-email-1': CampaignsMarketingEmail1,
    'enterprise-ecom-1': EnterpriseEcom1,
    'interactive-app-tool-4': InteractiveAppTool4,
};

export const imageUrlMap: Record<string, string> = {
    'interactive-app-visualization-2.png': InteractiveAppVisualization1Url,
    'interactive-app-tool-3.png': InteractiveAppTool3Url,
    'interactive-app-visualization-1.png': InteractiveAppVisualization3Url,
    'campaigns-newsletter-1.png': CampaignsNewsletter1Url,
    'wordpress-custom-multisite.png': WordPressCustomMultisiteUrl,
    'wordpress-custom.png': WordPressCustomUrl,
    'campaign-marketing-email-1': CampaignsMarketingEmail1Url,
    'enterprise-ecom-1': EnterpriseEcom1Url,
    'interactive-app-tool-4': InteractiveAppTool4Url,
};

export const getFullImageUrl = (filename: string): string => {
    const processedUrl = imageUrlMap[filename];
    if (!processedUrl) return '';

    if (processedUrl.startsWith('/')) {
        const processedPath = processedUrl.replace('.png', '5.webp');
        const origin = typeof window !== 'undefined' ? window.location.origin : 'https://ncdesigns-studio.com';
        return `${origin}${processedPath}`;
    }

    return processedUrl;
};
