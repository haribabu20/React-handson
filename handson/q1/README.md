1. Create a functional component that renders a list of items fetched from an API. Add a input box to enter the number of lists required to display. List should display only when the button clicked. 

Add the reset button to clear all the list.


Take away:

Normally for fetch, when the api response is 400 series or 500 series, it won't throw any error. Only if we have any internet issue, it throws error. 

Hence we manually have to throw error if response is not related to 200 series. So we go for the consition 

"if(response.ok) throw new Error("Invalid request)."


This will come in catch now and we can print this error message by giving as --> message.error to print the error message that we gave in if condition.
