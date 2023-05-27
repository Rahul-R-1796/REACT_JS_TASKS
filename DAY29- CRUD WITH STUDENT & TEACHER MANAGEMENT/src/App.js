/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Teachers_Page from './components/teachers/teachers';
import AddTeacher from './components/teachers/addteacher';
import { useState } from 'react';
import { studentData, teacherData } from './data/data';
import NoPage from './components/NoPage';
import Students_Page from './components/student/student';
import AddNewStudent from './components/student/addstudent';
import EditUser from './components/student/editStudent';
import EditTeacher from './components/teachers/editteacher';
import ViewStudent from './components/student/viewstudents';
import ViewTeacher from './components/teachers/viewteacher';
import UserDetails from './components/User';

function App() {
  const [teacher,setTeacher] = useState(teacherData);
  const [student,setStudent] = useState(studentData);

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <UserDetails/>
        </Route>

        <Route path={"/students"}>
          <Students_Page student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/addstudent"}>
          <AddNewStudent student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/editstudent/:id"}>
          <EditUser student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/view/student/:id"}>
          <ViewStudent student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/teacher"}>
          <Teachers_Page teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/addteacher"}>
          <AddTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/edit/teacher/:id"}>
          <EditTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/view/teacher/:id"}>
          <ViewTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"**"}>
          <NoPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
