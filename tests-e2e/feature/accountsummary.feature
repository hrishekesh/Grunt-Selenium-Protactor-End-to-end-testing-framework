Feature: account-summary
  I want to view summary of all selfservice connections
  So That I have a consolidated view to manage my connections better 
@Login @Enterprise @CloseOverlay
Scenario: View account summary
    Given I view account summary page
    Then I am able to see list of all my selfservice connections
	And I am able to search on the connections
	
@Login @Customer
Scenario: View account summary
    Given I view account summary page
    Then I am able to see list of all my selfservice connections
