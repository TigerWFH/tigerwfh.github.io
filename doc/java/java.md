# Java Spring
## MySql数据类型
```SQL
    CREATE TABLE `commission_store_user_settle` (
        `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
        `gmt_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        `version` int(11) NOT NULL DEFAULT '0' COMMENT '版本号',
        `commission_user_id` bigint(20) NOT NULL COMMENT '店员用户ID',
        `user_id` bigint(20) NOT NULL COMMENT '扫码下单用户ID',
        `trade_id` varchar(64) NOT NULL COMMENT '订单id',
        `seller_id` bigint(20) NOT NULL COMMENT '商户ID',
        `store_id` bigint(20) NOT NULL COMMENT '门店ID',
        `order_date` datetime NOT NULL COMMENT '下单日期',
        `sku_id` bigint(20) NOT NULL COMMENT '商品规格渠道ID',
        `price` bigint(20) NOT NULL COMMENT '金额_支付金额',
        `item_count`  int(11) NOT NULL COMMENT '商品数量',
        `commission_status` tinyint(4) NOT NULL COMMENT '分佣状态 1:待分佣 2:已分佣 3:不分佣' ,
        `commission_type` tinyint(4) NOT NULL COMMENT '分佣类型 1:患者支付处方 2:买手商城' ,
        `commission_amount` bigint(20) NOT NULL DEFAULT '0' COMMENT '分佣金额，单位分',
        `commission_percent` int(11) NOT NULL DEFAULT '0' COMMENT '分佣比例',
 
        PRIMARY KEY (`id`),
        KEY `idx_trade_id` (`trade_id`) USING BTREE,
        KEY `idx_cms_user_id_cms_date` (`commission_user_id`,`order_date`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COMMENT='店员分佣结算表';
```
* `bigint(20)`
## 术语
* `装配（wiring）：`在Spring中，对象无需自己查找或创建与其所关联的其他对象。相反，容器负责把需要相互协作的对象引用赋予各个对象。创建应用对象之间协作关系的行为通常称为装配（wiring），这也是依赖注入的本质。默认情况下，Spring中的bean都是单例 的
```js
    /**
     * Spring提供了三种主要的装配机制，可以混合使用：
     * 1、在XML中进行显式配置
     *  直接配置XML文件：
     *  声明Bean
     *      <bean id="xx" class="soundsystem.SgtPeppers" />
     *  声明DI
     *      <bean id="cdPlayer" class="soundsystem.SgtPeppers">
     *          <constructor-arg ref="compactDisc" />
     *      </bean>
     * 2、在Java中进行显式配置：当引入第三方库时，无法使用@Component和@Autowired注解添加到第三方类上，必须显式配置依赖
     *      通常会将JavaConfig放到单独的包中，使用@Configuration注解
     *  
     * 3、隐式的bean发现机制和自动装配:
     *      3-1：组件扫描（component scanning），Spring会自动发现应用上下文中所创建的bean
     *      3-2：自动装配（autowiring），Spring自动满足bean之间的依赖
     *      3-3：组件扫描默认是关闭的，需要配置开启
     * 
     * 
     * / 
```
* `注解：`
```js
    /**
     * （）内的例如@Named，@Inject，等是Java依赖注入规范中的注解
     * 1、@Component（@Named）：表明某个类为称为一个组件类，并告知Spring要为这个类创建Bean，因为使用了@Component注解，就没必要显示配置bean，Spring会自动扫描并装配
     * 2、@ComponentScan：启用组件扫描，对应xml配置：<context:component-scan base-package="soundsystem" />
     * 3、@ContextConfiguration：基于java的配置
     * 4、@Autowired（@inject）：Spring特有的注解。自动装配，可以用在构造器上，也可以用到类的其它方法上
     * 5、@Configuration：表明这个类是一个配置类
     * 6、@Bean：该注解会告诉Spring这个方法会返回一个对象，默认情况下，Spring中的bean都是单例的
     * 7、@Import：JavaConfig拆分引入方式
     * 8、@ImportResource：引入基于XML的配置
     * / 
```