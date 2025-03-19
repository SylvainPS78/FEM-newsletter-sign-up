
## The challenge


Your users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


Style :

Mobile :

- flex colonne
	- image - OK
	- H1 - OK
	- p texte OK
	- liste avec puce personnalisée sous forme d'une image
	- label for form OK
	- input form (avec texte par défaut "email@compagny.com" OK
	- button submit OK (gradient de couleur quand click)

==> SI OK :
	- display none sur toute la page
	- Autre flex avec :
		- image
		- H1
		- p texte depuis le JS avec email user en gras
		- button pour hide et revenir au flex principal (gradient de couleur quand click)

--> Si NOK :
	- message d'erreur personalisé (valid email required)
	- CSS personalisé (tout en rouge)

