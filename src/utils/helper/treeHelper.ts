interface TreeHelperConfig {
  id: string;
  children: string;
  pid: string;
}

// 默认配置项
const DEFAULT_CONFIG: TreeHelperConfig = {
  id: "id",
  children: "children",
  pid: "pid"
};

// 获取配置,将配置拷贝一份
const getConfig = (config: Partial<TreeHelperConfig>) => Object.assign({}, DEFAULT_CONFIG, config);

export function filter<T = any>(
  tree: T[],
  func: (n: T) => boolean,
  config: Partial<TreeHelperConfig> = {}
): T[] {
  config = getConfig(config); // 获取配置
  const childrenKey = config.children as string; // 获取嵌套列表字段

  function listFilter(list: T[]) {
    return list.filter((item: any) => {
      // 若该项有children，继续递归
      item[childrenKey] = item[childrenKey] && listFilter(item[childrenKey]);
      // 使用传入的回调进行过滤,返回false则过滤，否则有children则保留
      return func(item) || item[childrenKey]?.length;
    });
  }

  return listFilter(tree);
}
