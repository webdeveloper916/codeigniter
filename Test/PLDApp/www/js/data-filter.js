var filters = angular.module('filters', []);

filters.filter('personFilter', function() {
    return function(friends, country, citizenship, livingGroup, company, industry, functional) {
        var countryRegx = new RegExp(country, "i");
        var citizenRegx = new RegExp(citizenship, "i");
        var lgRegx = new RegExp(livingGroup, "i");
        var companyRegx = new RegExp(company, "i");
        var industryRegx = new RegExp(industry, "i");
        var functionalRegx = new RegExp(functional, "i");

        if (country == 'None' && citizenship == 'None' && livingGroup  == 'None' 
                && company  == 'None' && industry  == 'None' && functional  == 'None' ) {
            return friends;
        }
        var results = [];
        for (i = 0; i < friends.length; i++) {
            if (
                ( (country == 'None') || (country != 'None' && friends[i].country.search(countryRegx) != -1 )) && 
                ( (citizenship == 'None') || (citizenship != 'None' && friends[i].citizenship.search(citizenRegx) != -1)) &&
                ( (livingGroup == 'None') || (livingGroup != 'None' && friends[i].livingGroup.search(lgRegx) != -1 )) && 
                ( (company == 'None') || (company != 'None' && friends[i].company.search(companyRegx) != -1 )) && 
                ( (industry == 'None') || (industry != 'None' && friends[i].industry.search(industryRegx) != -1 )) && 
                ( (functional == 'None') || (functional != 'None' && friends[i].functional.search(functionalRegx) != -1 )) 
            ) 
            {
                // || friends[i].age.toString().search(searchText) != -1) {
                results.push(friends[i]);
            }
        }
        return results;
    }
});

