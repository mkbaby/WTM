import i18n from "@/lang";
// 页面中，需要展示的动作按钮；增，改，删，导入，导出
export var ASSEMBLIES = [
    "add",
    "edit",
    "delete",
    "export",
    "imported"
];
// 列表
export var TABLE_HEADER = [
    { key: "ITCode", sortable: true, label: i18n.t("frameworkuser.ITCode") },
    { key: "Name", sortable: true, label: i18n.t("frameworkuser.Name") },
    { key: "Gender", sortable: true, label: i18n.t("frameworkuser.Gender") },
    { key: "PhotoId", label: i18n.t("frameworkuser.PhotoId"), isSlot: true },
    { key: "IsValid", label: i18n.t("frameworkuser.IsValid"), isSlot: true },
    { key: "RoleName_view", label: i18n.t("frameworkuser.RoleName_view") },
    { key: "GroupName_view", label: i18n.t("frameworkuser.GroupName_view") },
    { isOperate: true, label: i18n.t("table.actions"), actions: ["detail", "edit", "deleted"] } //操作列
];
//# sourceMappingURL=config.js.map