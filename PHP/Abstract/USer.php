<?php


class User {

    public function __construct($id, $name, $email) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }
    public function get_info() {
        echo"". $this->name . "" . $this->email . "";
    }
}

class devloper extends User
{

    public $task = [];

    public function addTAsk( Task $task) {
        $this->task = $task[];
    }

    public function get_task()
    {
        return $this->task;
    }
}



class Manager extends User{

    public function addProject( Project $project)
    {
        $this->$projects[] = $project;
    }

    public function assignTAskto(Task $task, devloper $devloper)
    {
        $task->assignTo($devloper);
    }
}


    class TAsk{


        public $title;
        public $devloper;
        public $status;

        public function __construct($title) {
            $this->title = $title;
        }

        public function assignTaskTO($devloper) {
            $this->devloper = $devloper;
            $devloper->addTAsk();
        }

        public function status($status)
        {
            $this->status = $status;
        }


}


class projects{

    public $name;
    public $tasks = [];

    public function __construct($name, $tasks)
    {

        $this->name = $name;
    }

    public function search_projects_by_name(Name $name )
    {
        return array_filter($this->tasks{
                return $task->name === $name;
            });
    }



    public function sort_by_task()
    {
        
    }

    public function addTask(Task $task)
    {

        if (($this->task) > 5)
        {
            $this->tasks[] = $task;
        }
        else
        {
            echo "more than 5";
        }
    }




}

