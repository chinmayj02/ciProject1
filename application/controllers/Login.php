<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct() {
        parent::__construct();
        $this->load->helper('url'); // Load the URL helper
    }
	public function index()
	{
		$this->load->view('login');
	}
	public function submit() {
        $this->load->view('signup'); //to test
    }
}
