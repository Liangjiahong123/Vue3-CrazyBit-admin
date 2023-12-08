import { isArray } from "@/utils/vaildate";
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
    return list.filter((item: T) => {
      // 若该项有children，继续递归
      item[childrenKey] = item[childrenKey] && listFilter(item[childrenKey]);
      // 执行传入的函数进行过滤
      return func(item) || item[childrenKey]?.length;
    });
  }

  return listFilter(tree);
}

export function treeMap<T = any>(tree: T[], options: { children?: string; conversion: Fn }): T[] {
  return tree.map((item: T) => treeMapEach(item, options));
}

export function treeMapEach<T = any>(
  data: T,
  { children = "children", conversion }: { children?: string; conversion: Fn }
) {
  // 判断是否有children
  const haveChildren = isArray(data[children]) && data[children].length > 0;
  const conversionData = conversion(data) || [];
  if (haveChildren) {
    return {
      ...conversionData,
      [children]: data[children].map((item: T) => treeMapEach(item, { children, conversion }))
    };
  } else {
    return { ...conversionData };
  }
}
