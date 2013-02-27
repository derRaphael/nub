#!/usr/bin/env php
<?php

    spl_autoload_extensions(".php");
    spl_autoload_register();
    
    class nub_conditional_1 extends \nub\core\nub
    {
        public function __construct(){}
        
        public function __init(){}
        
        public function __compute(){}
        
        public function __disable()
        {
            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Conditional Object 1" ) );
            ( new \nub\strings\nub_echo( "\n" ) );
        }
    }
    
    class nub_conditional_2 extends \nub\core\nub
    {
        public function __construct(){}
        
        public function __init(){}
        
        public function __compute(){}
        
        public function __disable()
        {
            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Conditional Object 2" ) );
            ( new \nub\strings\nub_echo( "\n" ) );
        }
    }
    
    class main_nub extends \nub\core\nub
    {
        public function __init()
        {
            $expression = new \nub\core\expression();
            $expression->__set_target( "X" );
            $expression->__set_comparative( "Y" );
            $expression->__set_condition( \nub\types\condition::__NE__ );
            
            $conditional = new \nub\core\if_else();
            $conditional->__set_expression( $expression );
            $conditional->__set_ifcase( new nub_conditional_1() );
            $conditional->__set_elsecase( new nub_conditional_2() );
            $conditional->__compute();
        }
        
        public function __compute()
        {
        }
        
        public function __disable()
        {

            ( new \nub\strings\nub_echo( "\n" ) );
        }
    }
    
    (new main_nub());

?>
