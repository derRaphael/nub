<?php
namespace nub\core
{
    class if_else extends \nub\core\abstracts\nub_abstract
    {
        public function __construct()
        {
            $this->__init();
        }
        
        public function __init()
        {
            $this->else_case = new \nub\core\nub();
        }
        
        public function __set_expression( \nub\core\expression $value )
        {
            $this->expression = $value;
        }
        
        public function __set_ifcase( $value )
        {
            $this->if_case = $value;
        }
        
        public function __compute()
        {
            $this->expression->__compute();
        
            if ( $this->expression->value )
            {
                $this->if_case->__init();
                $this->if_case->__compute();
                $this->if_case->__disable();
                
                $result = $this->if_case->__value();
                
            } else {
            
                $this->else_case->__init();
                $this->else_case->__compute();
                $this->else_case->__disable();
                
                $result = $this->else_case->__value();
            }
            
            $this->value = $result;
        }
        
        public function __set_elsecase( $value )
        {
            $this->else_case = $value;
        }
        
        public function __value()
        {
            return $this->value;
        }        
    }    
}
?>
