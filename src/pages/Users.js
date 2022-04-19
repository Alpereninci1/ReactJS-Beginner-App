import React, {Component} from 'react';
class Users extends Component
{
    render(){

        return(
            <div className='container'>
                <div className='shadow-sm p-3 mb-5 bg-white rounded' style={{padding:'10px',margin:'20px'}}>
                    <div className='row'>
                        <div className='col-auto'>
                            <img src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy" alt='Avatar' style={{width:'200px',height:'200px'}}></img>
                        </div>                        
                        <div className='col' style={{textAlign:'inherit'}}>
                            <h2>Alperen İnci</h2>
                            <p><strong>Email: </strong>alperen25inci@hotmail.com</p>
                            <p><strong>Phone: </strong>5316247161</p>
                            <p><strong>Company: </strong>AlfaNova</p>
                            <p><strong>Website: </strong>https://www.linkedin.com/in/alpereninci1/</p>
                            <p><strong>Address:</strong>Gültepe Mahallesi,Şakir Sokak,No:3</p>
                            </div>     
                        </div>
                </div>
                <div className='shadow-sm p-3 mb-5 bg-white rounded' style={{padding:'10px',margin:'20px'}}>
                    <div className='row'>
                        <div className='col-auto'>
                            <img src="https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy" alt='Avatar' style={{width:'200px',height:'200px'}}></img>
                        </div>                        
                        <div className='col-auto' style={{textAlign:'inherit'}}>
                            <h2>Kerem İnci</h2>
                            <p><strong>Email: </strong>kerem25inci@hotmail.com</p>
                            <p><strong>Phone: </strong>5316257125</p>
                            <p><strong>Company: </strong>AlfaNova</p>
                            <p><strong>Website: </strong>https://www.linkedin.com/in/kereminci1/</p>
                            <p><strong>Address:</strong>Gül Mahallesi,Çiçek Sokak,No:2</p>
                            </div>     
                        </div>
                </div>
            </div>
        );
        
    }
}

export default Users;