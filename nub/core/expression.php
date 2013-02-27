<?php
namespace nub\core
{

    use \nub\types\condition as cond;

    class expression extends \nub\core\abstracts\nub_abstract
    {
        public $target = true;
        public $comparative = true;
        public $condition = cond::__EQ__;
    
        public function __construct()
        {}
        
        public function __set_target( $value )
        {
            $this->target = $value;
        }
        
        public function __set_comparative( $value )
        {
            $this->comparative = $value;
        }
        
        public function __set_condition( $value )
        {
            $this->condition = $value;
        }
        
        public function __compute()
        {
            $value = null;
            
            switch ( $this->condition )
            {
                case cond::__AND__:
                    $value = ( $this->target && $this->comparative );
                    break;
                case cond::__OR__:
                    $value = ( $this->target || $this->comparative );
                    break;
                case cond::__EQ__:
                    $value = ( $this->target == $this->comparative );
                    break;
                case cond::__EQT__:
                    $value = ( $this->target === $this->comparative );
                    break;
                case cond::__NE__:
                    $value = ( $this->target != $this->comparative );
                    break;
                case cond::__NET__:
                    $value = ( $this->target !== $this->comparative );
                    break;
                case cond::__LT__:
                    $value = ( $this->target < $this->comparative );
                    break;
                case cond::__LTE__:
                    $value = ( $this->target <= $this->comparative );
                    break;
                case cond::__GT__:
                    $value = ( $this->target > $this->comparative );
                    break;
                case cond::__GTE__:
                    $value = ( $this->target >= $this->comparative );
                    break;
            }
            
            $this->value = $value;
        }
        
        public function __value()
        {
            return $this->value;
        }        
    }    
}
?>
