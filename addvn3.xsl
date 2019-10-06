<?xml version="1.0" encoding="UTF-8"?>
<!-- 
     Insert an empty "query variants" placeholder into every topic
  -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" />

    <!-- keep first 3 -->
    <xsl:template match="top[position() &lt;= 3]">
        <xsl:copy>
            <xsl:apply-templates select="@*" />
            <!--apply templates to children-->
            <xsl:apply-templates select="node()" />
            <!--Only add variants node if non-existent-->
            <xsl:if test="not(variants)">
                <variants />
            </xsl:if>
        </xsl:copy>
    </xsl:template>

    <!-- ignore rest -->
    <xsl:template match="top" />

    <!--standard identity template, which copies all content forward-->
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
    </xsl:template>

<xsl:strip-space elements="*"/>

</xsl:stylesheet>
