# The Angular test task

this project is a test task of **Dade afzar Arman** software development company. the framework used is **Angular**.

<br><br>


## Table of Contents

- [Components](#components)
  - [3 main components](#3-main-components)
    - [Tree view of the connections](#tree-view-of-the-connections)
  - [Main Component](#main-component) 
  - [Collection](#collection) 
  - [Document](#document) 
  - [Field](#field)
  - [Other Components](#other-components)
    - [AddCollectionDialogComponent](#AddCollectionDialogComponent)
    - [AddDocumentComponent](#AddDocumentComponent)
    - [AddFieldDialogComponent](#AddFieldDialogComponent)
    - [AlertDialogComponent](#AlertDialogComponent)
    - [HeaderComponent](#HeaderComponent)
    - [IconButtonComponent](#IconButtonComponent)
    - [SingleFieldComponent](#SingleFieldComponent)
- [Interfaces](#Interfaces)
  - [icollection](#icollection) 
  - [idocument](#idocument)
  - [ifield](#ifield) 
  - [iAlertData](#iAlertData) 
  - [iAddDocumentResult](#iAddDocumentResult)
- [Services](#Services)
  - [UI Services](#UI-Services)

<br><br>

## Components


### 3 main components

the whole project environment is built on main 3 components 

- [Collections](#collection)
- [Documents](#document)
- [Fields](#field)
<br>
to handle the connections between these components there is a component called **Main Component**
<br>

#### Tree view of the connections

```
|-- Collection 1
|   |-- document1
|   |   |-- field 1
|   |   |-- field 2
|   |   |-- ...
|   |-- document2
|   |   |-- field 1
|   |   |-- field 2
|   |   |-- ...
|-- Collection 2
|   |-- document1
|   |   |-- field 1
|   |   |-- field 2
|   |   |-- ...
|   |-- document2
|   |   |-- field 1
|   |   |-- field 2
|   |   |-- ...
```
<br>

### Main Component 

this is the base route of project and the app start from this component. it handles the connection between the 3 main components.

<br><br>

### Collection 

Collection is a data structure that represents a *name* and array of documents. 

### Document 

Document is a data structure that represent a *name* and array of fields.

### Field

Field is a data structure that contains a *field name*, *field type* and *field value*.


<br><br><br>


### Other Components

#### AddCollectionDialogComponent

a dialog to add new collection which gets only the name of new collection and checks if the name is duplicate and if the entered string has special characters which is not allowed. 
<br><br>

#### AddDocumentComponent

a component to add new document with corresponding fields. the component check if name of entered document is duplicate or names of entered fields are duplicate. if the entered strings have special characters which is not allowed. 
<br><br>

#### AddFieldDialogComponent

a dialog which contains a [SingleFieldComponent](#SingleFieldComponent) to add new field that checks if the name of new field is duplicate and has special characters 
<br><br>

#### AlertDialogComponent

a dialog to show message to user. the data to show implements [iAlertData](#ialertdata) interface
<br><br>

#### HeaderComponent

component to show the header of the final UI that only contains a title.
<br><br>

#### IconButtonComponent

a button which shows two icons : plus icon or minus icon.  this component is used as start collection button,  add document button and add field button
<br><br>

#### SingleFieldComponent

as mentioned the [fields](#field) has 3 variables which implements [ifield](#ifield) interface. this component is a form of 3 inputs of the fields data structure which is used in multiple parts of project. this component makes it easy to handle the form of adding field.
<br><br>

<br>

## Interfaces

for the data structures in this project there are some interface :

<br>

### icollection 

represents data structure for [collection](#collection).

### idocument

represents data structure for [document](#document).

### ifield 

represents data structure for [field](#field).

<br><br><br>



### iAlertData 

data structure send for show alert function in [UI Service](#ui-services).  contains a string title and a string message. the message also could be html code.
<br>

### iAddDocumentResult

data structure for data send back from add document component which contains the new document data and a boolean which indicates whether Save button or Save and add an other button on add document panel clicked. 


<br><br><br>


## Services

there is one service in this project.
<br>


### UI Services

this service handles the dialogs interactions and also [add document](#AddDocumentComponent) panel
<br>







