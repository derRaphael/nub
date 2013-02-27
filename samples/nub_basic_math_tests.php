#!/usr/bin/env php
<?php

    spl_autoload_extensions(".php");
    spl_autoload_register();
    
    class main_nub extends \nub\core\nub
    {
        public function __init()
        {
            $this->math_operation1 = new \nub\math\basic\operations\subtraction();
            $this->math_operation1->__set_minuend( new \nub\types\number( 5 ) );
            $this->math_operation1->__set_subtrahend( new \nub\types\number( 1 ) );

            $this->math_operation2 = new \nub\math\basic\operations\addition();
            $this->math_operation2->__set_summand( new \nub\types\number( 5 ) );
            $this->math_operation2->__set_summand( new \nub\types\number( 1 ) );

            $this->math_operation3 = new \nub\math\basic\operations\multiplication();
            $this->math_operation3->__set_multiplicand( new \nub\types\number( 2 ) );
            $this->math_operation3->__set_multiplicand( new \nub\types\number( 3 ) );
            $this->math_operation3->__set_multiplicand( new \nub\types\number( 2 ) );

            $this->math_operation4 = new \nub\math\basic\operations\division();
            $this->math_operation4->__set_divident( new \nub\types\number( 10 ) );
            $this->math_operation4->__set_divisor( new \nub\types\number( 5 ) );
        }
        
        public function __compute()
        {
            $this->math_operation1->__compute();
            $this->math_operation1_value = $this->math_operation1->__value();

            $this->math_operation2->__compute();
            $this->math_operation2_value = $this->math_operation2->__value();

            $this->math_operation3->__compute();
            $this->math_operation3_value = $this->math_operation3->__value();

            $this->math_operation4->__compute();
            $this->math_operation4_value = $this->math_operation4->__value();
        }
        
        public function __disable()
        {

            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Subtraction (5-1): " ) );
            ( new \nub\strings\nub_echo( $this->math_operation1_value ) );
            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Addition (5+1): " ) );
            ( new \nub\strings\nub_echo( $this->math_operation2_value ) );
            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Multiplication (2*3*2): " ) );
            ( new \nub\strings\nub_echo( $this->math_operation3_value ) );
            ( new \nub\strings\nub_echo( "\n" ) );
            ( new \nub\strings\nub_echo( "Division (10/2): " ) );
            ( new \nub\strings\nub_echo( $this->math_operation4_value ) );
            ( new \nub\strings\nub_echo( "\n" ) );
        }
    }
    
    (new main_nub());

?>
