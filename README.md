# Directory

    Solution for task given for interview.
    Application made using Create-React-Appp TS template.

## How to run

    1. npm install
    2. npm run start

## TechStack

    1. TypeScript - used because I prefer it over regular JS.  Benefits of type checking and autoComplition.
    2. StyledComponents - used over regular css, for easy scoping. While using it the code structure in component can be devided into 3 sections: HTML template, styling and functionality - code. This approach is common also in otherframeworks.
    3. Axios - just used to it, keeps my mind of JSON data transformation

## My Addition

    I wanted to add more funcionality, but I restrained myself just to tweak UX.
    Added hoover effect for folder entity and navigation to indicate interactive element.
    Loader spinner taken from [loading.io](https://loading.io/css/)

## Concerns

    1. FolderEntity as <div> or <button>. Because FolderEntity is interactive element of application, I tagged it as <button>. It's gives more a11y and enables basic movement with tab.
    2. Exporting styles out of component. On start I decided to split styling components to their own folder, but then it got messy. So I switch my decision to export only styling for FolderEntity as it was used in two components and styling for main App component to make it cleaner.
