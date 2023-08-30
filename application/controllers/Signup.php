<?php
class Signup extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url'); // Load the URL helper
    }
    public function index() {
        $this->load->view('signup');
    }

    public function submit() {
        // Handle form submission here
    }
}
?>