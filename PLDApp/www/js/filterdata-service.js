var filterDataService = angular.module('filterDataService', []);

/**
 * A simple example service that returns some data.
 */
filterDataService.factory('FilterData', function() {

var emails = [
	{
		id: 0,
		email: 'nutan@pld19.hbs.edu'
	},
	{
		id: 1,
		email: 'nutan@pld19.hbs.edu'
	},
	{
		id: 2,
		email: 'test@pld19.hbs.edu'
	}
];

var countries = [
	{
		id: 0,
		country: 'None'
	},
	{
		id: 1,
		country: 'India'
	},
	{
		id: 2,
		country: 'USA'
	},
	{
		id: 3,
		country: 'Saudi Arabia'
	},
	{
		id: 4,
		country: 'Sweden'
	}
];
var livingGroups = [
    {
    	id: 0,
        livingGroup: 'None',
        text:   ''
    },
    {
    	id: 1,
        livingGroup: '22',
        text:   'McArthur Hall-23'
    },
    {
    	id: 2,
        livingGroup: '43',
        text:   'McArthur Hall-24'
    },
    {
    	id: 3,
        livingGroup: '62',
        text:   'McArthur Hall-25'
    },
    {
    	id: 4,
        livingGroup: '53',
        text:   'McArthur Hall-22'
    }
];
var companies = [
	{
		id: 0,
		company: 'None'
	},
	{
		id: 1,
		company: 'TASA Worldwide'
	},
	{
		id: 2,
		company: 'Hyperion Energy Group'
	},
	{
		id: 3,
		company: 'Stern Stewart & Co.'
	},
	{
		id: 4,
		company: 'Ericsson'
	},
];
var functionals = [
	{
		id: 0,
		functional: 'None'
	},
	{
		id: 1,
		functional: 'Sales'
	},
	{
		id: 2,
		functional: 'Project Management'
	},
	{
		id: 3,
		functional: 'Customer-Director'
	},
	{
		id: 4,
		functional: 'Marketing'
	},
];
var citizenships = [
	{
		id: 0,
		citizenship: 'None'
	},
	{
		id: 1,
		citizenship: 'USA'
	},
	{
		id: 2,
		citizenship: 'Jorden'
	},
	{
		id: 3,
		citizenship: 'Nigeria'
	},
	{
		id: 4,
		citizenship: 'India'
	},
	{
		id: 5,
		citizenship: 'Spain'
	},
];
var industries = [
	{	
		id: 0,
		industry: 'None'
	},
	{
		id: 1,
		industry: 'construction'
	},
	{
		id: 2,
		industry: 'Telecom'
	},
	{
		id: 3,
		industry: 'IT'
	},
	{	
		id: 4,
		industry: 'Retail'
	},
];

return {
    emails: function() {
      return emails;
    },
    countries: function() {
      return countries;
    },
    livingGroups: function() {
      return livingGroups;
    },
    companies: function() {
      return companies;
    },
    functionals: function() {
      return functionals;
    },
    citizenships: function() {
      return citizenships;
    },
    industries: function() {
      return industries;
    }
  }
});