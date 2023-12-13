const urls = [
    'https://www.archives.gov/education/lessons/food-wwi.html',
    'https://www.archives.gov/fort-worth/finding-aids/rg004-food-administration.html',
    'https://tellus.ars.usda.gov/stories/articles/time-for-victory-gardens-again/',
    'https://nmbu.brage.unit.no/nmbu-xmlui/handle/11250/2583549',
    'https://www.nytimes.com/2020/03/25/dining/victory-gardens-coronavirus.html',
    'https://www.fao.org/fileadmin/templates/faoitaly/documents/pdf/pdf_Food_Security_Cocept_Note.pdf',
    'https://www.acf.hhs.gov/ana/event/food-security-sovereignty-webinar',
    'https://www.ohchr.org/sites/default/files/Documents/Publications/FactSheet34en.pdf',
    'https://education.nationalgeographic.org/resource/development-agriculture/',
    'https://www.worldhistory.org/article/997/ancient-egyptian-agriculture/',
    'https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=1082&context=studiaantiqua',
    'https://www.almanac.com/native-american-gardening-techniques',
    'https://daily.jstor.org/partner-post-indigenous-agriculture/',
    'https://blogs.scientificamerican.com/anthropology-in-practice/the-american-obsession-with-lawns/',
    'https://wellcomecollection.org/works/kbn8xcat',
    'https://www.architecturaldigest.com/story/the-great-gatsby-mansion-is-on-the-market',
    'https://www.health.harvard.edu/blog/backyard-gardening-grow-your-own-food-improve-your-health-201206294984',
    'https://extension.illinois.edu/blogs/ilriverhort/2020-08-03-grow-your-own-vegetables-benefit-your-health-and-environment',
    'https://www.greenamerica.org/climate-victory-gardens',
    'https://www.ams.usda.gov/services/grants',
    'https://www.nyu.edu/about/news-publications/news/2021/september/pandemic-food-insecurity.html',
    'https://www.nytimes.com/2020/03/25/dining/victory-gardens-coronavirus.html',
    'https://extension.umn.edu/yard-and-garden-news/seed-shortages-2021',
    'https://abcnews.go.com/US/vegetable-garden-brings-criminal-charges-oak-park-michigan/story?id=14047214',
    'https://www.thebalancemoney.com/what-is-ccrs-1798525',
    'https://www.findlaw.com/realestate/owning-a-home/cc-r-basics.html',
    'https://www.kppm.com/rules-and-expectations-of-managers-and-hoa-boards-of-directors/',
    'https://www.yellowstonelandscape.com/blog/most-common-hoa-landscaping-gardening-policies-why-matter-your-community',
    'https://growmyownfood.com/hoa-bans-vegetable-gardens/',
    'https://www.homeadvisor.com/r/hoa-rules-and-restrictions/',
    'https://cms5.revize.com/revize/stpete/Business/Planning%20&%20Zoning/Land%20Development/Fence%20Wall%20Hedge%2010_20_15%20HANDOUT.docx.pdf',
    'https://getitdone.sandiego.gov/ViewArticle?URLName=Who-is-responsible-for-vegetation-encroaching-on-the-street-or-sidewalk',
    'https://www.bostonglobe.com/metro/2012/05/21/how-does-his-garden-grow-pretty-high/mruxiZwkuJIvyDAoCUTzaK/story.html',
    'https://www.cbsnews.com/boston/news/newton-man-vows-to-fight-city-hall-over-hanging-tomato-plants/',
    'https://www.wcvb.com/article/newton-hanging-tomato-garden-must-go-1/8170896',
    'https://www.floridabar.org/the-florida-bar-journal/florida-nuisance-law-and-urban-agriculture/',
    'https://www.changelabsolutions.org/sites/default/files/CommunityGardenToolkit_Final_(CLS_20120530)_20110207.pdf',
    'https://www.brunswickcompanies.com/commercial-insurance/community-garden-insurance/',
    'https://www.progressive.com/answers/does-insurance-cover-landscaping/',
    'https://ij.org/case/flveggies/',
    'https://ij.org/modellegislation/#:~:text=Model%20Legislation%20%2D%20Institute%20for%20Justice&text=IJ%20defends%20the%20right%20of,seizures%2C%20searches%2C%20and%20fines',
    'https://nationalpress.org/topic/model-bill-copycat-legislation-center-for-public-integrity-tracker/#:~:text=A%20copycat%20or%20model%20bill,it%20replicated%20in%20multiple%20states',
    'https://ij.org/legislation/vegetable-garden-protection-act/',
    'https://ij.org/wp-content/uploads/2020/08/Model-Vegetable-Garden-Protection-Act-converted.pdf',
    'https://www.flsenate.gov/Session/Bill/2019/00082/?Tab=RelatedBills',
    'https://gardeningsolutions.ifas.ufl.edu/plants/edibles/garden-policy.html',
    'https://www.chicagotribune.com/opinion/commentary/ct-opinion-garden-hoop-property-rights-elmhurst-20200828-n64y47l345fb7hegkuce6c6e7m-story.html',
    'https://www.youngfarmers.org/2011/09/chicago-passes-ordinance-permitting-widespread-urban-farming/',
    'https://edgarcountywatchdogs.com/2021/02/new-bill-would-protect-right-to-garden-in-illinois/',
    'https://www.enidnews.com/news/politics/oklahoma-right-to-garden-bill-passes-despite-criticism/article_3203dd8a-aa29-11ec-b3bf-4b7c558de4cd.html',
    'https://ourbesttoyou.nebraska.gov/programs/NebraskaCommunityGardenToolkitDec2016.pdf',
    'https://ourbesttoyou.nebraska.gov/programs/NebraskaCommunityGardenMaps.pdf',
    'https://www.ohchr.org/sites/default/files/Documents/Publications/FactSheet34en.pdf',
    'https://www.ohchr.org/en/special-procedures/sr-food/about-right-food-and-human-rights',
    'https://www.fao.org/right-to-food-around-the-globe/countries/en/',
    'https://geneva.usmission.gov/2017/03/24/u-s-explanation-of-vote-on-the-right-to-food/#:~:text=The%20United%20States%20supports%20the%20right%20of%20everyone,the%20right%20to%20food%20as%20an%20enforceable%20obligation',
    'https://www.fsa.usda.gov/news-room/news-releases/2022/usda-opens-peoples-garden-initiative-to-gardens-nationwide',
    'https://www.natlawreview.com/article/2023-federal-forecast-agriculture',
    'https://sustainableagriculture.net/blog/a-look-at-the-office-of-urban-agriculture-and-innovative-production/',
    'https://www.eenews.net/articles/congress-biggest-fight-over-climate-its-the-farm-bill/',
    'https://www.ers.usda.gov/webdocs/publications/45014/30940_err140.pdf',
    'https://unfccc.int/process-and-meetings/the-paris-agreement#:~:text=It%20entered%20into%20force%20on,above%20pre%2Dindustrial%20levels.%E2%80%9D',
    'https://www.fao.org/right-to-food-around-the-globe/countries/usa/en/#:~:text=The%20Constitution%20of%20de%20the,yet%20become%20a%20State%20party',
    'https://hilalelver.org/resources/',
    'https://www.fao.org/cfs/policy-products/en/',
    'https://sdgs.un.org/goals',
    'https://www.wbcsd.org/Overview/News-Insights/Member-spotlight/The-Arcadis-Sustainable-Cities-Index-2022',
    'https://www.sustainabledevelopment.report/reports/2019-us-cities-sustainable-development-report/',
    'http://www.ubalt.edu/about-ub/sustainable-cities/goal-15.cfm',
    'https://www.sandiego.gov/urban-farming',
    'http://usfoodsovereigntyalliance.org/what-is-food-sovereignty/#:~:text=%E2%80%9CFood%20sovereignty%20is%20the%20right,own%20food%20and%20agriculture%20systems',
    'https://www.actionagainsthunger.org/the-hunger-crisis/world-hunger-facts/',
    'https://www.cbsnews.com/news/one-in-four-americans-food-insecure/#:~:text=Almost%2025%25%20of%20American%20adults,according%20to%20a%20new%20study'
    ];

const inputField = document.querySelector('#citeWebsiteDiv input');
const submitButton = document.querySelector('#citeBluebook');

urls.forEach((url, index) => {
    setTimeout(() => {
        inputField.value = url;
        submitButton.click();
    }, index * 6000);
});
/* 
setInterval(() => {

}, 3000); */