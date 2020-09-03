<?php
/**
 * @file
 * Contains \Drupal\brown_d8react_integration\Plugin\field\field_type\KeyValue.
 */
namespace Drupal\brown_d8react_integration\Plugin\field\FieldType;

use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'brown_d8react_integration_keyvalue' field type.
 *
 * @FieldType(
 * id = "brown_d8react_integration_keyvalue",
 * label = @Translation("DReact KeyValue"),
 * description = @Translation("Key Value pairs to be passed to apps"),
 * default_widget = "brown_d8react_integration_keyvalue_widget",
 * default_formatter = "brown_d8react_integration_keyvalue_formatter"
 * )
 */
class DReactKeyValueItem extends FieldItemBase {
  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    return array(
      'columns' => array(
        'key' => array(
          'type' => 'text',
          'size' => 'tiny',
          'not null' => TRUE,
        ),
        'value' => array(
          'type' => 'text',
          'size' => 'tiny',
          'not null' => TRUE,
        )
      )
    );
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    $key = $this->get('key')->getValue();
    $value = $this->get('value')->getValue();
    return ($key === NULL || $value === NULL) || ($value === '' || $key === '');
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = [];
    $properties['key'] = DataDefinition::create('string')
      ->setLabel(t('Key'));
    $properties['value'] = DataDefinition::create('string')
      ->setLabel(t('Value'));
    return $properties;
  }
}
