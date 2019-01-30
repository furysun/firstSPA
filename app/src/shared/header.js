export function getHeader() {

    var template = `<div id="header">
<ul class="navbar">
       
       
        <li class="navbar-icon">
            <i class="material-icons">sentiment_satisfied</i>
        </li>
        
        <li class="navbar-icon">
            <i class="material-icons">assignment_ind</i>
        </li>
        <li class="navbar-icon-l">
            <i class="material-icons">search</i>
            <input id="search" type="text" placeholder="Search..">
        </li>
    </ul>

</div>`;
    return template;
}
