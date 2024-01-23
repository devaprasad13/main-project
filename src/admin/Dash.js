
import { Link } from 'react-router-dom'
import './Dash.css'
export default function Dash()
{
    let Wel = ()=>
    {
        return alert("Wlecome Admin, Thankyou for maintaing a KCE Transport");
    }
    return (
        (
            <>
             <body>

        

<div id="sidebar">
    <Link href="#" class="brand">
    <i to='/land'></i>
        <span class="text">Admin Portal</span>
    </Link>
    <ul class="side-menu top">
        <li class="active">
            <Link to="/dash">
                <i class='bx bxs-dashboard' ></i>
                <span class="text">Dashboard</span>
            </Link>
        </li>
        <li>
            <Link to="/user">
                <i class='bx bx-plus-medical'></i>
                <span class="text">Add User</span>
            </Link>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-group'></i>
                <span class="text">View Users</span>
            </a>
        </li>

        <li>
            <a href="/deva">
            <i class='bx bxs-bus' ></i>
                <span class="text">Bus Routes</span>
            </a>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-location-plus' ></i>
                <span class="text">View Location</span>
            </a>
        </li>
        <li>
            <a href="#">
            <i class='bx bxs-spreadsheet'></i>
                <span class="text">Billing</span>
            </a>
        </li>

        <li>
            <Link to="/not">
            <i class='bx bxs-megaphone'></i>
                <span class="text">Notify</span>
            </Link>
        </li>
      
    </ul>
    <ul class="side-menu">
        <li>
            <a href="#">
                <i class='bx bxs-cog' ></i>
                <span class="text">Settings</span>
            </a>
        </li>
        <li>
            <Link to="/" class="logout">
                <i class='bx bxs-log-out-circle' ></i>
                <span class="text">Logout</span>
            </Link>
        </li>
    </ul>
</div>

<div id="contest">
   
    <nav>
        <i class='bx bx-menu' ></i>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
            <div class="form-input">
                <input type="search" placeholder="Search..."/>
                <button type="submit" class="search-btn"><i class="bi bi-search"></i></button>
            </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden/>
        <label for="switch-mode" class="switch-mode"></label>
        <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
        </a>
        <a href="#" class="profile">
        
        </a>
    </nav>
 
    <main>
        <div class="head-title">
            <div class="left">
                <h1>Dashboard</h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li><i class='bx bx-chevron-right' ></i></li>
                    <li>
                        <Link class="active" to="/dash">Home</Link>
                    </li>
                </ul>
            </div>
            <a class="btn-download" onClick={Wel}>
                <i class='bx bxs-cloud-download' ></i>
                <span class="text">WELCOME</span>
            </a>
        </div>

        <ul class="box-info">
            <li>
                <i class='bx bxs-group' ></i>
            
                <span class="text">
                    <h3>30</h3>
                    <p>Total Users</p>
                </span>
            </li>
            <li>
                <i class='bx bxs-dollar-circle' ></i>
                <span class="text">
                    <h3>10</h3>
                    <p>Fees Pending</p>
                </span>
            </li>
            <li>
                <i class='bx bxs-dollar-circle' ></i>
                <span class="text">
                    <h3>20</h3>
                    <p>Fees Paid</p>
                </span>
            </li>
        </ul>


        <div class="table-data">
            <div class="order">
                <div class="head">
                    <h3>Recent Payments</h3>
                    <i class='bx bx-search' ></i>
                    <i class='bx bx-filter' ></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>RollNo</th>
                            <th>Name</th>
                            <th>Date Of Pay</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>717821F113</td>
                            <td>
                                
                                Devaprasad J.s
                            </td>
                            <td>01-10-2023</td>
                            <td><span class="status completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>717821F116</td>
                            <td>
                                
                                Gowtham P
                            </td>
                            <td>02-10-2023</td>
                            <td><span class="status completed">Completed</span></td>
                        </tr>

                        <tr>
                            <td>717821F104</td>
                            <td>
                                Agathiyakumar
                            
                            </td>
                            <td>03-10-2023</td>
                            <td><span class="status completed">Completed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="todo">
                <div class="head">
                    <h3>Todo List</h3>
                    <i class='bx bx-plus' ></i>
                    <i class='bx bx-filter' ></i>
                </div>
                <ul class="todo-list">
                    <li class="completed">
                        <p>Todo List</p>
                        <i class='bx bx-dots-vertical-rounded' ></i>
                    </li>
                   
                </ul>
            </div>
        </div>
    </main>
 
</div>



</body>
            
            
            </>
        )
    )
}