<?php
/**
 * @file
 * Contains \Drupal\module_name\Plugin\field\field_type\KeyValue.
 */

 namespace Drupal\brown_d8react_integration\Plugin\field\field_type;

use Drupal\field\Plugin\Type\FieldType\ConfigFieldItemBase;
use Drupal\field\FieldInterface;

/**
 * Plugin implementation of the 'keyvalue' field type.
 *
 * @FieldType(
 * id = "keyvalue",
 * label = @Translation("KeyValue"),
 * description = @Translation("Key Value pairs to be passed to apps"),
 * default_widget = "keyvalue_default_widget",
 * default_formatter = "keyvalue_default_formatter"
 * )
 */
class KeyValue extends ConfigFieldItemBase {

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldInterface $field) {
    return array(
      'columns' => array(
        'key' => array(
          'type' => 'varchar',
          'length' => 256,
          'not null' => TRUE,
        ),
        'value' => array(
          'type' => 'varchar',
          'length' => 256,
          'not null' => TRUE,
        )
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    $value = $this->get('key')->getValue();
    return $value === NULL || $value === '';
  }

  /**
   * {@inheritdoc}
   */
  static $propertyDefinitions;

  /**
   * {@inheritdoc}
   */
  public function getPropertyDefinitions() {
    if (!isset(static::$propertyDefinitions)) {
      static::$propertyDefinitions['key'] = array(
        'type' => 'string',
        'label' => t('Key'),
      );
      static::$propertyDefinitions['value'] = array(
        'type' => 'string',
        'label' => t('Value'),
      );
    }
    return static::$propertyDefinitions;
  }
}
