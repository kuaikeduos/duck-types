/**
 * 描述了一个通用的表单组件
 */

interface Form<T> {
  value: T,
  onChange: (newValue: T) => void
}