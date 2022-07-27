// import * as React from 'react';
// import { ChangeEvent, Component, FormEvent } from 'react';
// import { EUserFormInputNames, IUserForm } from '../userTypes';
// import { connect, ConnectedProps } from 'react-redux';
// import { createUser } from '../../../redux/users_store/usersActions';
//
// const connector = connect(null, { createUser });
//
// type PropsFromRedux = ConnectedProps<typeof connector>;
// type Props = PropsFromRedux & {};
//
// class UserForm extends Component<Props, IUserForm> {
//     constructor(props: Props) {
//         super(props);
//
//         this.state = {
//             nickname: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             terms: false
//         };
//     }
//
//     private isFormValid = (userForm: IUserForm): boolean => {
//         if (!userForm.terms
//             || userForm.password !== userForm.confirmPassword
//             || userForm.nickname.length < 3) {
//             console.error('Form Validation Error!');
//             return false;
//         }
//         return true;
//     };
//
//     private submitHandler = (event: FormEvent): void => {
//         event.preventDefault();
//
//         const { nickname, email, password, confirmPassword, terms } = this.state;
//
//         const userForm: IUserForm = {
//             nickname: nickname.trim(),
//             email: email.trim(),
//             password,
//             confirmPassword,
//             terms
//         };
//
//         console.log('submitHandler', userForm);
//         if (!this.isFormValid(userForm)) { return; }
//
//         this.props.createUser({
//             id: Date.now(),
//             nickname,
//             email,
//             password
//         });
//         this.setState({
//             nickname: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             terms: false,
//         });
//     };
//
//     private changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
//         // TODO: Google event.persist()
//         // event.persist()
//         switch (event.target.name) {
//             case EUserFormInputNames.Terms: {
//                 this.setState(prev => ({
//                     ...prev, ...{
//                         [event.target.name]: !prev.terms,
//                     }
//                 }));
//                 break;
//             }
//             case EUserFormInputNames.Nickname:
//             case EUserFormInputNames.Email:
//             case EUserFormInputNames.Password:
//             case EUserFormInputNames.ConfirmPassword: {
//                 this.setState(prev => ({
//                     ...prev, ...{
//                         [event.target.name]: event.target.value
//                     }
//                 }));
//                 break;
//             }
//         }
//     };
//
//     render() {
//         return (
//             <div className="border-2 p-3 border-b-emerald-600">
//                 <h1 className="text-2xl font-bold text-center">UserForm</h1>
//
//
//                 <form onSubmit={this.submitHandler}>
//                     <div className="mb-6">
//                         <label
//                             htmlFor="nickname"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Your Nickname</label>
//                         <input
//                             value={this.state.nickname}
//                             onChange={(e) => this.changeInputHandler(e)}
//                             name={EUserFormInputNames.Nickname}
//                             type="text"
//                             id="nickname"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             placeholder="John"
//                             required/>
//                     </div>
//                     <div className="mb-6">
//                         <label
//                             htmlFor="email"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Your email</label>
//                         <input
//                             value={this.state.email}
//                             onChange={(e) => this.changeInputHandler(e)}
//                             name={EUserFormInputNames.Email}
//                             type="email"
//                             id="email"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             placeholder="name@flowbite.com"
//                             required/>
//                     </div>
//                     <div className="mb-6">
//                         <label
//                             htmlFor="password"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Your password</label>
//                         <input
//                             value={this.state.password}
//                             onChange={(e) => this.changeInputHandler(e)}
//                             name={EUserFormInputNames.Password}
//                             type="password"
//                             id="password"
//                             placeholder="********"
//                             autoComplete="off"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             required/>
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="repeat-password"
//                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Repeat password</label>
//                         <input
//                             value={this.state.confirmPassword}
//                             onChange={(e) => this.changeInputHandler(e)}
//                             name={EUserFormInputNames.ConfirmPassword}
//                             type="password"
//                             id="repeat-password"
//                             autoComplete="off"
//                             placeholder="********"
//                             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//                             required/>
//                     </div>
//                     <div className="flex items-start mb-6">
//                         <div className="flex items-center h-5">
//                             <input
//                                 id="terms"
//                                 type="checkbox"
//                                 name={EUserFormInputNames.Terms}
//                                 checked={this.state.terms}
//                                 onChange={(e) => this.changeInputHandler(e)}
//                                 className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                                 required/>
//                         </div>
//                         <label
//                             htmlFor="terms"
//                             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             I agree with the
//                             <a href="components/users/PostForm/PostForm#" className="text-blue-600 hover:underline dark:text-blue-500"> terms and conditions</a>
//                         </label>
//                     </div>
//                     <button
//                         type="submit"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                         Register new account</button>
//                 </form>
//
//
//             </div>
//         );
//     }
// }
//
// export default connector(UserForm);
