import React, { useState } from 'react'
import './admin.css'
import { Link } from 'react-router-dom'
import ListJpb from '../listJop/ListJop'
import AddJob from '../addJop/AddJob'
import ListApply from '../../4-apply/list_apply/ListApply'

export default function Admin() {
    const [list_jop_flag, set_list_jop_flag] = useState(false)
    const [list_apply_flag, set_list_apply_flag] = useState(false)
    const [add_jop, add_jop_flag] = useState(false)

    const ListJopFlag = () => {
        set_list_jop_flag(prevState => {
            add_jop_flag(false);
            set_list_apply_flag(false)
            return !prevState;
        });
    }
    const ListApplyFlag = () => {
        set_list_apply_flag(prevState => {
            add_jop_flag(false);
            set_list_jop_flag(false)
            return !prevState;
        });
    }

    const AddJopFlag = () => {
        add_jop_flag(prevState => {
            set_list_jop_flag(false)
            set_list_apply_flag(false)
            return !prevState;
        });
    }




  return (
    <div className="admin_page">

        <div className="container">
            <div className="admin_content">
                <div className="side_bar">
                    <ul>
                        <li id='admin_list_jop' onClick={ListJopFlag}>List Jop</li>
                        <li id='admin_list_jop_app' onClick={ListApplyFlag}>Job applications</li>
                        <li id='admin_add_job' onClick={AddJopFlag}>Add Job</li>
                    </ul>
                </div>

                <div className="main_page">
                    {list_jop_flag && <ListJpb />}
                    {add_jop && <AddJob />}
                    {list_apply_flag && <ListApply />}
                    
                </div>
            </div>


        </div>
    </div>


  )
}
