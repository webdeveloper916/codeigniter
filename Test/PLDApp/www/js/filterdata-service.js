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
		country: 'Angola'
	},
	{
		id: 2,
		country: 'Australia'
	},
	{
		id: 3,
		country: 'Austria'
	},
	{
		id: 4,
		country: 'Azerbaijan'
	},
	{
		id: 5,
		country: 'Brazil'
	},
	{
		id: 6,
		country: 'Bulgaria'
	},
	{
		id: 7,
		country: 'Canada'
	},
	{
		id: 8,
		country: 'China'
	},
	{
		id: 9,
		country: 'Colombia'
	},
	{
		id: 10,
		country: 'Denmark'
	},
	{
		id: 11,
		country: 'England'
	},
	{
		id: 12,
		country: 'France'
	},
	{
		id: 13,
		country: 'Germany'
	},
	{
		id: 14,
		country: 'Ghana'
	},
	{
		id: 15,
		country: 'Greece'
	},
	{
		id: 16,
		country: 'Iceland'
	},
	{
		id: 17,
		country: 'India'
	},
	{
		id: 18,
		country: 'Italy'
	},
	{
		id: 19,
		country: 'Japan'
	},
	{
		id: 20,
		country: 'Kuwait'
	},
	{
		id: 21,
		country: 'Leichtenstein'
	},
	{
		id: 22,
		country: 'Mexico'
	},
	{
		id: 23,
		country: 'New Zealand'
	},
	{
		id: 24,
		country: 'Nigeria'
	},
	{
		id: 25,
		country: 'Quatar'
	},
	{
		id: 26,
		country: 'Russia'
	},
	{
		id: 27,
		country: 'Saudi Arabia'
	},
	{
		id: 28,
		country: 'Singapore'
	},
	{
		id: 29,
		country: 'South Africa'
	},
	{
		id: 30,
		country: 'Spain'
	},
	{
		id: 31,
		country: 'Switzerland'
	},
	{
		id: 32,
		country: 'Turkey'
	},
	{
		id: 33,
		country: 'United Arab Emirates'
	},
	{
		id: 34,
		country: 'United Kingdom'
	},
	{
		id: 35,
		country: 'USA'
	},
	
	
];
var livingGroups = [
    {
    	id: 0,
        livingGroup: 'None'
        
    },
    {
    	id: 1,
        livingGroup: '21'
        
    },
    {
    	id: 2,
        livingGroup: '22'
        
    },
    {
    	id: 3,
        livingGroup: '23'
        
    },
    {
    	id: 4,
        livingGroup: '31'
        
    },

    {
    	id: 5,
        livingGroup: '32'
        
    },
    {
    	id: 6,
        livingGroup: '33'
        
    },
    {
    	id: 7,
        livingGroup: '41'
        
    },
    {
    	id: 8,
        livingGroup: '42'
        
    },
    {
    	id: 9,
        livingGroup: '43'
        
    },

    {
    	id: 10,
        livingGroup: '51'
        
    },
    {
    	id: 11,
        livingGroup: '52'
        
    },

    {
    	id: 12,
        livingGroup: '53'
        
    },
    {
    	id: 13,
        livingGroup: '54'
        
    },
    {
    	id: 14,
        livingGroup: '61'
        
    },
    {
    	id: 15,
        livingGroup: '62'
        
    },
    {
    	id: 16,
        livingGroup: '63'
        
    },
    {
    	id: 17,
        livingGroup: '64'
        
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
		functional: 'Accounting/Control'
	},
	{
		id: 2,
		functional: 'Consulting'
	},
	{
		id: 3,
		functional: 'Engineering'
	},
	{
		id: 4,
		functional: 'Finance: Corporate Finance'
	},
	{
		id: 5,
		functional: 'Finance: General'
	},
	{
		id: 6,
		functional: 'Finance: Investment Management'
	},
	{
		id: 7,
		functional: 'Finance: Lending'
	},
	{
		id: 8,
		functional: 'Finanace: Treasury/Analysis'
	},
	{
		id: 9,
		functional: 'Fundraising/Developement'
	},
	{
		id: 10,
		functional: 'General Management'
	},
	{
		id: 11,
		functional: 'Human Resources'
	},
	{
		id: 12,
		functional: 'Information Services Mgmt.'
	},
	{
		id: 13,
		functional: 'Manufacturing/Operations'
	},
	{
		id: 14,
		functional: 'Marketing: Brand/Prod. Mgmt'
	},
	{
		id: 15,
		functional: 'Marketing: General'
	},
	{
		id: 16,
		functional: 'Marketing: Sales'
	},
	{
		id: 17,
		functional: 'Product Developement'
	},
	{
		id: 18,
		functional: 'Project Management'
	},
	{
		id: 19,
		functional: 'Research & Developement'
	},
	{
		id: 20,
		functional: 'Other'
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
		industry: 'Advocacy'
	},
	{
		id: 2,
		industry: 'Aerosp/Autom/Trans Equipment'
	},
	{
		id: 3,
		industry: 'Agribusiness'
	},
	{	
		id: 4,
		industry: 'Biotechnology'
	},
	{	
		id: 5,
		industry: 'Chemicals'
	},
	{
		id: 6,
		industry: 'Commercial Banking'
	},
	{
		id: 7,
		industry: 'Computer-related Services'
	},
	{
		id: 8,
		industry: 'Computers/Hardware'
	},
	{	
		id: 9,
		industry: 'Coputers/Software'
	},
	{	
		id: 10,
		industry: 'Construction'
	},
	{
		id: 11,
		industry: 'Consulting'
	},
	{
		id: 12,
		industry: 'Consumer Products'
	},
	{
		id: 13,
		industry: 'Education'
	},
	{	
		id: 14,
		industry: 'Energy/Extractive Minerals'
	},
	{
		id: 15,
		industry: 'Engineering'
	},
	{	
		id: 16,
		industry: 'Entertainment/Leisure'
	},
	{	
		id: 17,
		industry: 'Food/Beverage'
	},
	{
		id: 18,
		industry: 'Food Service/Lodging'
	},
	{
		id: 19,
		industry: 'Government'
	},
	{
		id: 20,
		industry: 'Health Services'
	},
	{	
		id: 21,
		industry: 'High Technology/Electronics'
	},
	{
		id: 22,
		industry: 'Housing/Urban Developement'
	},
	{
		id: 23,
		industry: 'Investment Banking'
	},
	{
		id: 24,
		industry: 'Investment Management'
	},
	{	
		id: 25,
		industry: 'Medical/Health Care Devices'
	},
	{
		id: 26,
		industry: 'Military'
	},
	{	
		id: 27,
		industry: 'Other Manufacturing'
	},
	{
		id: 28,
		industry: 'Other Non-profit'
	},
	{
		id: 29,
		industry: 'Other Services'
	},
	{
		id: 30,
		industry: 'Paper & Forest Products'
	},
	{	
		id: 31,
		industry: 'Pharmaceuticals'
	},
	{
		id: 32,
		industry: 'Private Equity'
	},
	{	
		id: 33,
		industry: 'Public Relations'
	},
	{
		id: 34,
		industry: 'Real Estate Developement'
	},
	{
		id: 35,
		industry: 'Retailing/Wholesaling'
	},
	{
		id: 36,
		industry: 'Sales & Trading'
	},
	{	
		id: 37,
		industry: 'Telecommunications'
	},
	{
		id: 38,
		industry: 'Textiles & Apparel'
	},
	{
		id: 39,
		industry: 'Trading/Import/Export'
	},
	{	
		id: 40,
		industry: 'Transportation'
	},
	{	
		id: 41,
		industry: 'Utilities'
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